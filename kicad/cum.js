const fs = require("fs");

const lineIds = [
  "tstamp 1b16da31-8de4-41c8-a955-054888ef8bbc",
  "tstamp 1b87f9cb-aab0-440a-880d-9c2cf13bb068",
  "tstamp 1de13f12-0099-43ac-b239-9279bb6ebea6",
  "tstamp 27505674-8d53-43d3-8d72-bb1ef02a7ab7",
  "tstamp 42293d07-d1f0-4bc1-a4f5-78bf0b53ea9e",
  "tstamp 5d171894-28ba-4d0a-843d-ea4646a956d2",
  "tstamp 5f3c02fe-87df-4428-8cf3-a9fbb66bd37e",
  "tstamp 75e9dd33-8a65-4c88-9cc6-a0be5ef9de1c",
  "tstamp 805eb6f7-9150-4d16-9e7c-2074e77fd2bc",
  "tstamp 924aef8d-0370-495a-90a6-4c1d789e9292",
  "tstamp 92cdb7b1-713f-40d6-aeaf-7403248e4b03",
  "tstamp 9e09a430-d20c-4cd3-8dd6-d12f60efa40f",
  "tstamp b47affa1-ae39-4fdc-9ac4-a297102df220",
  "tstamp c7c99fe4-6ad6-435a-ac4c-be7bdfb05446",
  "tstamp e872f89b-8221-497c-babe-f5de0de34ecd",
  "tstamp f016d73c-de97-4bba-8e97-0f03c79c089c",
];

const filename = "alleycat.kicad_pcb";

const data = fs.readFileSync(filename, "utf-8");

// console.log(data.split("\n")[0]);

const output = [];

function hasId(str) {
  for (const id of lineIds) {
    if (str.includes(id)) {
      return true;
    }
  }

  return false;
}

for (const line of data.split("\n")) {
  if (hasId(line)) {
    // console.log(line);
    output.push(line.replace("Dwgs.User", "Edge.Cuts"));
    console.log("replaced", line);
  } else {
    output.push(line);
  }
}

fs.writeFileSync(filename + "out", output.join("\n"));
