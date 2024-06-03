import { TabsTrigger as TabsTriggerShadcn } from '@/components/ui/tabs'

interface TabsTriggerProps {
  value: string
  title: string
}

export function TabsTrigger({ value, title }: TabsTriggerProps) {
  return (
    <TabsTriggerShadcn
      value={value}
      className="rounded-none border-b-[#2364AA] text-base text-foreground data-[state=active]:border-b-2 data-[state=active]:text-[#2364AA]"
    >
      {title}
    </TabsTriggerShadcn>
  )
}
