-- Create PromptLibrary table
CREATE TABLE "PromptLibrary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "variables" JSONB,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "lastUsed" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Add indexes
CREATE INDEX "PromptLibrary_category_idx" ON "PromptLibrary"("category");
CREATE INDEX "PromptLibrary_usageCount_idx" ON "PromptLibrary"("usageCount");

-- Seed initial prompts
INSERT INTO "PromptLibrary" ("id", "name", "category", "prompt", "variables")
VALUES 
  ('p1', 'saas-landing-hero', 'landing', 'Write a high-converting hero section for a SaaS that...', '{"productType": "string"}');
