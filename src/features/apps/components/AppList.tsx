import AppSearch from "./AppSearch";
import AppListItem from "./AppListItem";

const apps = [
  "supertokens-golang",
  "supertokens-java",
  "supertokens-python",
  "supertokens-ruby",
  "supertokens-go",
];

export default function AppList() {
  return (
    <div className="w-80 rounded-xl bg-black border border-zinc-800 p-5 shadow-lg">
      <h2 className="text-xl font-semibold mb-5">
        Application
      </h2>

      <AppSearch />

      <div className="space-y-2">
        {apps.map((app) => (
          <AppListItem
            key={app}
            name={app}
          />
        ))}
      </div>
    </div>
  );
}