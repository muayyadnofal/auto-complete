import { Autocomplete } from "@/Core/components";

const users = [
  { label: "John Doe", value: "john.doe" },
  { label: "Jane Smith", value: "jane.smith" },
  { label: "Michael Johnson", value: "michael.johnson" },
  { label: "Emily Davis", value: "emily.davis" },
  { label: "David Wilson", value: "david.wilson" },
  { label: "Sarah Brown", value: "sarah.brown" },
  { label: "Robert Lee", value: "robert.lee" },
  { label: "Olivia Taylor", value: "olivia.taylor" },
  { label: "Daniel Clark", value: "daniel.clark" },
  { label: "Sophia Anderson", value: "sophia.anderson" },
];

function NormalAutocomplete() {
  return <Autocomplete options={users} />;
}

export default NormalAutocomplete;
