import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    business: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("contacts", {
      ...args,
      createdAt: Date.now(),
    });

    await ctx.scheduler.runAfter(0, internal.emails.sendContactNotification, {
      name: args.name,
      email: args.email,
      business: args.business,
      message: args.message,
    });
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("contacts").order("desc").collect();
  },
});
