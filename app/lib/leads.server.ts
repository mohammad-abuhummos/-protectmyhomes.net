import { mkdir, readFile, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";

export interface Lead {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  address: string;
  city: string;
  state: string;
  ownership: string;
  propertyType: string;
  currentSystem: string;
  timeframe: string;
  interests: string[];
  source: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

/**
 * Persists the lead to a local JSON file and, if LEAD_WEBHOOK_URL is set,
 * forwards it to your CRM / lead buyer endpoint (e.g. Zapier, boberdoo,
 * LeadConduit). Swap this out for a database when you're ready.
 */
export async function saveLead(lead: Omit<Lead, "id" | "createdAt">) {
  const record: Lead = {
    ...lead,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  await mkdir(DATA_DIR, { recursive: true });

  let leads: Lead[] = [];
  try {
    leads = JSON.parse(await readFile(LEADS_FILE, "utf8"));
  } catch {
    // First lead — file doesn't exist yet.
  }
  leads.push(record);
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (error) {
      console.error("Lead webhook delivery failed:", error);
    }
  }

  return record;
}
