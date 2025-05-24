CREATE TABLE IF NOT EXISTS "Interview" (
    "id" SERIAL PRIMARY KEY,
    "jsonResponse" TEXT NOT NULL,
    "jobPosition" VARCHAR NOT NULL,
    "jobDesc" VARCHAR NOT NULL,
    "jobExperience" VARCHAR NOT NULL,
    "createdBy" VARCHAR NOT NULL,
    "createdAt" VARCHAR,
    "interviewId" VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS "UserAnswer" (
    "id" SERIAL PRIMARY KEY,
    "interviewIdRef" VARCHAR NOT NULL,
    "question" TEXT NOT NULL,
    "correctAns" TEXT NOT NULL,
    "userAns" TEXT NOT NULL,
    "feedback" TEXT,
    "rating" TEXT,
    "userEmail" VARCHAR NOT NULL,
    "createdAt" VARCHAR
); 