import { TestClient } from "@tivet-gg/actor-client/test";
import type Counter from "./counter.ts";

const client = new TestClient();

// Get-or-create a counter actor
const counter = await client.get<Counter>({ name: "counter" });

// Listen for update count events (https://tivet.gg/docs/events)
counter.on("countUpdate", (count: number) => console.log("New count:", count));

// Increment the count over remote procedure call (https://tivet.gg/docs/rpc)
const count1 = await counter.increment(1);
console.log(count1);
const count2 = await counter.increment(2);
console.log(count2);

// Disconnect from the actor when finished (https://tivet.gg/docs/connections)
await counter.disconnect();
