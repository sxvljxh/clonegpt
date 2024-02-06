"use client";

import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelector() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "gpt-3.5-turbo-0301",
  });

  return (
    <div>
      <Select
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        onChange={(e) => setModel(e.value)}
        menuPosition="fixed"
        isLoading={isLoading}
        isSearchable
        options={models.modelOptions}
        defaultValue={model}
        placeholder={model}
      />
    </div>
  );
}

export default ModelSelector;
