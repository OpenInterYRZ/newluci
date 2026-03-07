"use client";

import { Video, Brain, FileText, MessageCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import VM1VideoLibrary from "./VM1VideoLibrary";
import VM2MemoryPage from "./VM2MemoryPage";
import VM3TaskExecution from "./VM3TaskExecution";
import VM4ChatScreen from "./VM4ChatScreen";

const tabs = [
  { key: "video", label: "Video", icon: Video, component: VM1VideoLibrary },
  { key: "memory", label: "Memory", icon: Brain, component: VM2MemoryPage },
  { key: "task", label: "Task", icon: FileText, component: VM3TaskExecution },
  { key: "chat", label: "Chat", icon: MessageCircle, component: VM4ChatScreen },
] as const;

export default function VMDashboard() {
  return (
    <div className="w-full">
      <Tabs defaultValue="video" className="flex flex-col ">
        <TabsList variant="line" className="w-full shrink-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.key}
              value={tab.key}
              className="flex-1 py-3 text-[13px]"
            >
              <tab.icon size={16} />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* forceMount keeps all panels in DOM; data-[state=inactive]:hidden toggles visibility */}
        {tabs.map((tab) => (
          <TabsContent
            key={tab.key}
            value={tab.key}
            forceMount
            className="relative data-[state=inactive]:hidden h-full w-5xl"
          >
            <tab.component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
