import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Interview = pgTable('Interview', {
    id: serial('id').primaryKey(),
    jsonResponse: text('jsonResponse').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    interviewId: varchar('interviewId').notNull()
})

export const UserAnswer = pgTable('UserAnswer', {
    id: serial('id').primaryKey(),
    interviewIdRef: varchar('interviewIdRef').notNull(),
    question: text('question').notNull(),
    correctAns: text('correctAns').notNull(),
    userAns: text('userAns').notNull(),
    feedback: text('feedback'),
    rating: text('rating'),
    userEmail: varchar('userEmail').notNull(),
    createdAt: varchar('createdAt')
})