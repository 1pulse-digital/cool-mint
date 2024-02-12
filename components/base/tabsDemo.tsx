import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full  bg-background">
      <TabsList className="grid w-full grid-cols-3 bg-[#27272A]">
        <TabsTrigger value="machines">Machines</TabsTrigger>
        <TabsTrigger value="password">Workshops</TabsTrigger>
        <TabsTrigger value="password1">General</TabsTrigger>
      </TabsList>
      <TabsContent className="bg-background" value="machines">
        <Card className="bg-background border-0">
          <CardHeader>
            <CardTitle className="text-primary">Machines</CardTitle>
            <CardDescription>
            <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="text-textColor"value="item-1">
          <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet,
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
      </Accordion>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            
             
          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password1">
        <Card>
          <CardHeader>
            <CardTitle>Password1</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
