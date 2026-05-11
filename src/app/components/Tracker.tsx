"use client";
import { trackEvent } from "@/lib/gtag";
import React from "react";

interface TrackerProps {
  action: string;
  params?: Record<string, any>;
  children: React.ReactNode;
}

export const Tracker = ({ action, params, children }: TrackerProps) => {
  return (
    <div
      style={{ display: "contents" }}
      onClick={() => trackEvent(action, params)}
    >
      {children}
    </div>
  );
};
