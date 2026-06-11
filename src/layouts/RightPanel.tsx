import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import RightPanelContent from "./RightPanelContent";
import {
  selectIsMobilePanelOpen,
  useAppStore,
} from "@/store/useAppStore";

export default function RightPanel() {
  const isMobilePanelOpen = useAppStore(selectIsMobilePanelOpen);
  const setMobilePanelOpen = useAppStore((s) => s.setMobilePanelOpen);

  return (
    <>
      <aside className="hidden w-80 shrink-0 flex-col border-l border-zinc-800 bg-zinc-950 md:flex">
        <RightPanelContent />
      </aside>

      <Sheet open={isMobilePanelOpen} onOpenChange={setMobilePanelOpen}>
        <SheetContent
          side="right"
          className="w-full border-zinc-800 bg-zinc-950 p-0 sm:max-w-sm"
        >
          <SheetHeader className="border-b border-zinc-800">
            <SheetTitle className="text-white">Panel</SheetTitle>
          </SheetHeader>
          <RightPanelContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
