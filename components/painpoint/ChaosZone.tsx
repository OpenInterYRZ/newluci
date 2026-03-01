import React from "react";
import { AppWindow } from "./AppWindow";
import Badge from "../Badge";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { NotionWindow } from "./NotionWindow";
import { ChatGPTWindow } from "./ChatGPTWindow";
import { ZoomWindow } from "./ZoomWindow";
import { SlackWindow } from "./SlackWindow";
import { GmailWindow } from "./GmailWindow";
import { JiraWindow } from "./JiraWindow";
import { TrelloWindow } from "./TrelloWindow";
import BounceCards from "@/components/ui/BounceCards";
import {
  FileText,
  MessageSquare,
  Video,
  Hash,
  Mail,
  ListTodo,
} from "lucide-react";

const items = [
  <NotionWindow />,
  <ChatGPTWindow />,
  <ZoomWindow />,
  <SlackWindow />,
  <GmailWindow />,
];
const CHAOS_TOOLS = [
  {
    name: "Notion",
    logo: <FileText className="w-4 h-4 text-secondary" />,
    position: { x: 2, y: 1, rotate: -3, zIndex: 3 },
  },
  {
    name: "ChatGPT",
    logo: <MessageSquare className="w-4 h-4 text-secondary" />,
    position: { x: 12, y: 3, rotate: 2, zIndex: 2 },
  },
  {
    name: "Zoom",
    logo: <Video className="w-4 h-4 text-secondary" />,
    position: { x: 5, y: 8, rotate: -5, zIndex: 4 },
  },
  {
    name: "Slack",
    logo: <Hash className="w-4 h-4 text-secondary" />,
    position: { x: 15, y: 10, rotate: 1, zIndex: 1 },
  },
  {
    name: "Gmail",
    logo: <Mail className="w-4 h-4 text-secondary" />,
    position: { x: 8, y: 14, rotate: -2, zIndex: 5 },
  },
  {
    name: "Jira",
    logo: <ListTodo className="w-4 h-4 text-secondary" />,
    position: { x: 18, y: 16, rotate: 3, zIndex: 2 },
  },
];

export function ChaosZone() {
  return (
    <div className="relative flex items-center justify-center">
      <BounceCards items={items} enableHover />
    </div>
  );
}
