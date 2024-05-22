import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Machine } from "@/lib/fusion/workshop/machine.pb"
import IndustrialMachine from "./industrialMachine"

interface IndustrialMachineToolsProps {
  machines: Machine[]
}
const IndustrialMachineTools = (props: IndustrialMachineToolsProps) => {
  const { machines } = props

  // get all the categories of all machines and remove duplicates
  const categories = Array.from(
    new Set(machines.flatMap((machine) => machine.categories)),
  )

  const defaultCategory = categories[0]

  // TODO: @Parson140 - Remove all the hardcoded colors such as bg-[#27272A] we should only use the colors from the theme
  //                    See https://ui.shadcn.com/docs/theming#list-of-variables
  return (
    <div className="bg-background py-8">
      <Tabs defaultValue={defaultCategory} className="bg-background">
        <div className="px-6 pb-10 sm:mx-8 md:mx-8 lg:px-20 2xl:mx-96 xl:mx-40">
        <p className="py-3 text-center text-xs text-muted-foreground">Filter by</p>
          <TabsList className="grid w-full grid-cols-3 bg-[#27272A] px-2 text-foreground">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {categories.map((category) => {
          const filteredMachines = machines.filter((machine) =>
            machine.categories.includes(category),
          )
          console.log(`machines in category ${category}:`, filteredMachines)
          return (
            <TabsContent
              key={category}
              className="bg-background font-helvetica"
              value={category}
            >
              {filteredMachines.map((machine, index) => (
                <Card
                  key={machine.uid}
                  className="rounded-lg border-0 bg-background"
                >
                  <CardHeader>
                    <CardDescription className="text-muted-foreground">
                      <IndustrialMachine machine={machine} />
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2"></CardContent>
                </Card>
              ))}
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

export default IndustrialMachineTools
