import { useState } from 'react'
import {
  // Form components
  Button,
  ButtonGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Slider,
  Label,
  Field,
  // Data Display
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Skeleton,
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
  Progress,
  Kbd,
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  // Feedback
  Alert,
  AlertDescription,
  AlertTitle,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Spinner,
  // Overlay
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  // Navigation
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  // Layout
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Separator,
  ScrollArea,
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  AspectRatio,
  // Other
  Calendar,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
} from '@creativoma/ui-kit'
import { Toaster, toast } from 'sonner'

interface ComponentDemoProps {
  name: string
}

export function ComponentDemo({ name }: ComponentDemoProps) {
  const demos: Record<string, React.ReactNode> = {
    // Form Components
    Button: <ButtonDemo />,
    'Button Group': <ButtonGroupDemo />,
    Input: <InputDemo />,
    'Input Group': <InputGroupDemo />,
    'Input OTP': <InputOTPDemo />,
    Textarea: <TextareaDemo />,
    Select: <SelectDemo />,
    Checkbox: <CheckboxDemo />,
    'Radio Group': <RadioGroupDemo />,
    Switch: <SwitchDemo />,
    Slider: <SliderDemo />,
    Label: <LabelDemo />,
    Form: <FormDemo />,
    Field: <FieldDemo />,

    // Data Display
    Card: <CardDemo />,
    Table: <TableDemo />,
    Badge: <BadgeDemo />,
    Avatar: <AvatarDemo />,
    Skeleton: <SkeletonDemo />,
    Empty: <EmptyDemo />,
    Progress: <ProgressDemo />,
    Chart: <ChartDemo />,
    Kbd: <KbdDemo />,
    Item: <ItemDemo />,

    // Feedback
    Alert: <AlertDemo />,
    'Alert Dialog': <AlertDialogDemo />,
    Spinner: <SpinnerDemo />,
    Toast: <ToastDemo />,

    // Overlay
    Dialog: <DialogDemo />,
    Drawer: <DrawerDemo />,
    Sheet: <SheetDemo />,
    Popover: <PopoverDemo />,
    Tooltip: <TooltipDemo />,
    'Hover Card': <HoverCardDemo />,
    'Context Menu': <ContextMenuDemo />,
    'Dropdown Menu': <DropdownMenuDemo />,

    // Navigation
    Tabs: <TabsDemo />,
    Breadcrumb: <BreadcrumbDemo />,
    Pagination: <PaginationDemo />,
    'Navigation Menu': <NavigationMenuDemo />,
    Menubar: <MenubarDemo />,
    Sidebar: <SidebarDemo />,

    // Layout
    Accordion: <AccordionDemo />,
    Collapsible: <CollapsibleDemo />,
    Separator: <SeparatorDemo />,
    'Scroll Area': <ScrollAreaDemo />,
    Resizable: <ResizableDemo />,
    'Aspect Ratio': <AspectRatioDemo />,

    // Other
    Calendar: <CalendarDemo />,
    Carousel: <CarouselDemo />,
    Command: <CommandDemo />,
    Toggle: <ToggleDemo />,
    'Toggle Group': <ToggleGroupDemo />,
  }

  return (
    <div className="space-y-8">
      {demos[name] || (
        <div className="text-muted-foreground">
          Demo for "{name}" is coming soon...
        </div>
      )}
    </div>
  )
}

// Demo Components

function ButtonDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Variants">
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button>
            <Spinner className="mr-2 h-4 w-4" />
            Loading
          </Button>
        </div>
      </DemoSection>
    </div>
  )
}

function ButtonGroupDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <ButtonGroup>
          <Button variant="outline">Left</Button>
          <Button variant="outline">Center</Button>
          <Button variant="outline">Right</Button>
        </ButtonGroup>
      </DemoSection>

      <DemoSection title="Attached">
        <ButtonGroup attached>
          <Button variant="outline">Left</Button>
          <Button variant="outline">Center</Button>
          <Button variant="outline">Right</Button>
        </ButtonGroup>
      </DemoSection>
    </div>
  )
}

function InputDemo() {
  return (
    <div className="space-y-6 max-w-sm">
      <DemoSection title="Default">
        <Input placeholder="Enter your email" />
      </DemoSection>

      <DemoSection title="With Label">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Input disabled placeholder="Disabled input" />
      </DemoSection>
    </div>
  )
}

function InputGroupDemo() {
  return (
    <div className="space-y-6 max-w-sm">
      <DemoSection title="With Addons">
        <InputGroup>
          <InputGroupAddon>https://</InputGroupAddon>
          <Input placeholder="example.com" />
        </InputGroup>
      </DemoSection>

      <DemoSection title="With Suffix">
        <InputGroup>
          <Input placeholder="Amount" />
          <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
      </DemoSection>
    </div>
  )
}

function InputOTPDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="6 Digit Code">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </DemoSection>
    </div>
  )
}

function TextareaDemo() {
  return (
    <div className="space-y-6 max-w-md">
      <DemoSection title="Default">
        <Textarea placeholder="Type your message here..." />
      </DemoSection>

      <DemoSection title="With Label">
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
      </DemoSection>
    </div>
  )
}

function SelectDemo() {
  return (
    <div className="space-y-6 max-w-sm">
      <DemoSection title="Default">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </SelectContent>
        </Select>
      </DemoSection>
    </div>
  )
}

function CheckboxDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </DemoSection>

      <DemoSection title="Multiple">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="option1" />
            <Label htmlFor="option1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option2" />
            <Label htmlFor="option2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option3" disabled />
            <Label htmlFor="option3">Option 3 (disabled)</Label>
          </div>
        </div>
      </DemoSection>
    </div>
  )
}

function RadioGroupDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <RadioGroup defaultValue="option-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-1" id="r1" />
            <Label htmlFor="r1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-2" id="r2" />
            <Label htmlFor="r2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-3" id="r3" />
            <Label htmlFor="r3">Option 3</Label>
          </div>
        </RadioGroup>
      </DemoSection>
    </div>
  )
}

function SwitchDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </DemoSection>
    </div>
  )
}

function SliderDemo() {
  const [value, setValue] = useState([50])

  return (
    <div className="space-y-6 max-w-sm">
      <DemoSection title="Default">
        <div className="space-y-4">
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
          <p className="text-sm text-muted-foreground">Value: {value[0]}</p>
        </div>
      </DemoSection>
    </div>
  )
}

function LabelDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="With Input">
        <div className="space-y-2 max-w-sm">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter username" />
        </div>
      </DemoSection>
    </div>
  )
}

function FormDemo() {
  return (
    <div className="space-y-6 max-w-md">
      <DemoSection title="Login Form Example">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="form-email">Email</Label>
              <Input id="form-email" type="email" placeholder="name@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-password">Password</Label>
              <Input id="form-password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign In</Button>
          </CardFooter>
        </Card>
      </DemoSection>
    </div>
  )
}

function FieldDemo() {
  return (
    <div className="space-y-6 max-w-sm">
      <DemoSection title="With Description">
        <Field>
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <p className="text-sm text-muted-foreground">We'll never share your email.</p>
        </Field>
      </DemoSection>
    </div>
  )
}

function CardDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the main content of the card.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </CardFooter>
        </Card>
      </DemoSection>
    </div>
  )
}

function TableDemo() {
  const invoices = [
    { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
    { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  ]

  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DemoSection>
    </div>
  )
}

function BadgeDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Variants">
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </DemoSection>
    </div>
  )
}

function AvatarDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
          </Avatar>
        </div>
      </DemoSection>
    </div>
  )
}

function SkeletonDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Card Loading">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </DemoSection>
    </div>
  )
}

function EmptyDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Empty>
          <EmptyHeader>
            <EmptyMedia>📭</EmptyMedia>
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your search or filter to find what you're looking for.
            </EmptyDescription>
          </EmptyHeader>
          <Button>Clear filters</Button>
        </Empty>
      </DemoSection>
    </div>
  )
}

function ProgressDemo() {
  const [progress, setProgress] = useState(45)

  return (
    <div className="space-y-6 max-w-md">
      <DemoSection title="Default">
        <div className="space-y-4">
          <Progress value={progress} />
          <div className="flex gap-2">
            <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10%</Button>
            <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10%</Button>
          </div>
        </div>
      </DemoSection>
    </div>
  )
}

function ChartDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Info">
        <p className="text-muted-foreground">
          The Chart component provides a set of utilities for building charts with Recharts.
          See the documentation for full examples.
        </p>
      </DemoSection>
    </div>
  )
}

function KbdDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Keyboard Shortcuts">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-1">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </div>
          <div className="flex items-center gap-1">
            <Kbd>⌘</Kbd>
            <Kbd>⇧</Kbd>
            <Kbd>P</Kbd>
          </div>
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <Kbd>C</Kbd>
          </div>
        </div>
      </DemoSection>
    </div>
  )
}

function ItemDemo() {
  return (
    <div className="space-y-6 max-w-md">
      <DemoSection title="Default">
        <div className="space-y-2">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Account Settings</ItemTitle>
              <ItemDescription>Manage your account preferences</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Notifications</ItemTitle>
              <ItemDescription>Configure notification settings</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Privacy</ItemTitle>
              <ItemDescription>Control your privacy settings</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </DemoSection>
    </div>
  )
}

function AlertDemo() {
  return (
    <div className="space-y-6 max-w-lg">
      <DemoSection title="Default">
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </DemoSection>

      <DemoSection title="Destructive">
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </DemoSection>
    </div>
  )
}

function AlertDialogDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DemoSection>
    </div>
  )
}

function SpinnerDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Sizes">
        <div className="flex items-center gap-4">
          <Spinner className="h-4 w-4" />
          <Spinner className="h-6 w-6" />
          <Spinner className="h-8 w-8" />
          <Spinner className="h-12 w-12" />
        </div>
      </DemoSection>
    </div>
  )
}

function ToastDemo() {
  return (
    <div className="space-y-6">
      <Toaster />
      <DemoSection title="Types">
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => toast('This is a default toast')}>
            Default
          </Button>
          <Button onClick={() => toast.success('Operation successful!')}>
            Success
          </Button>
          <Button onClick={() => toast.error('Something went wrong!')}>
            Error
          </Button>
          <Button onClick={() => toast.warning('Please be careful!')}>
            Warning
          </Button>
          <Button onClick={() => toast.info('Here is some info')}>
            Info
          </Button>
        </div>
      </DemoSection>
    </div>
  )
}

function DialogDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@johndoe" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoSection>
    </div>
  )
}

function DrawerDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit Profile</DrawerTitle>
              <DrawerDescription>Make changes to your profile here.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="drawer-name">Name</Label>
                <Input id="drawer-name" defaultValue="John Doe" />
              </div>
            </div>
            <DrawerFooter>
              <Button>Save changes</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DemoSection>
    </div>
  )
}

function SheetDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Directions">
        <div className="flex flex-wrap gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Right</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>This sheet slides from the right.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>This sheet slides from the left.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </DemoSection>
    </div>
  )
}

function PopoverDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </DemoSection>
    </div>
  )
}

function TooltipDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <TooltipProvider>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </DemoSection>
    </div>
  )
}

function HoverCardDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </DemoSection>
    </div>
  )
}

function ContextMenuDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Settings</ContextMenuItem>
            <ContextMenuItem>Keyboard shortcuts</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </DemoSection>
    </div>
  )
}

function DropdownMenuDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoSection>
    </div>
  )
}

function TabsDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="tab-name">Name</Label>
                  <Input id="tab-name" defaultValue="John Doe" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your settings.</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </DemoSection>
    </div>
  )
}

function BreadcrumbDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DemoSection>
    </div>
  )
}

function PaginationDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" size="default" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="icon">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="icon" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="icon">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" size="default" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </DemoSection>
    </div>
  )
}

function NavigationMenuDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[400px]">
                  <p className="text-sm text-muted-foreground">
                    Start building with our component library.
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[400px]">
                  <p className="text-sm text-muted-foreground">
                    Explore our collection of components.
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer px-4 py-2 text-sm">
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DemoSection>
    </div>
  )
}

function MenubarDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Exit</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Zoom In</MenubarItem>
              <MenubarItem>Zoom Out</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </DemoSection>
    </div>
  )
}

function SidebarDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Info">
        <p className="text-muted-foreground">
          The Sidebar component is used in this documentation site! Check out the left navigation to see it in action.
        </p>
      </DemoSection>
    </div>
  )
}

function AccordionDemo() {
  return (
    <div className="space-y-6 max-w-md">
      <DemoSection title="Default">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoSection>
    </div>
  )
}

function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-6 max-w-md">
      <DemoSection title="Default">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {isOpen ? "Hide" : "Show"}
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm mt-2">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2 mt-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </DemoSection>
    </div>
  )
}

function SeparatorDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Horizontal">
        <div>
          <p className="text-sm text-muted-foreground">Content above</p>
          <Separator className="my-4" />
          <p className="text-sm text-muted-foreground">Content below</p>
        </div>
      </DemoSection>

      <DemoSection title="Vertical">
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </DemoSection>
    </div>
  )
}

function ScrollAreaDemo() {
  const tags = Array.from({ length: 50 }).map((_, i) => `v1.2.0-beta.${i}`)

  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag} className="text-sm py-1">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </DemoSection>
    </div>
  )
}

function ResizableDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel 1</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel 2</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </DemoSection>
    </div>
  )
}

function AspectRatioDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="16:9 Ratio">
        <div className="w-[300px]">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
            <span className="text-muted-foreground">16:9</span>
          </AspectRatio>
        </div>
      </DemoSection>

      <DemoSection title="4:3 Ratio">
        <div className="w-[300px]">
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
            <span className="text-muted-foreground">4:3</span>
          </AspectRatio>
        </div>
      </DemoSection>
    </div>
  )
}

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </DemoSection>
    </div>
  )
}

function CarouselDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DemoSection>
    </div>
  )
}

function CommandDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Default">
        <Command className="rounded-lg border shadow-md max-w-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DemoSection>
    </div>
  )
}

function ToggleDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Variants">
        <div className="flex flex-wrap gap-4">
          <Toggle aria-label="Toggle bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
          </Toggle>
        </div>
      </DemoSection>
    </div>
  )
}

function ToggleGroupDemo() {
  return (
    <div className="space-y-6">
      <DemoSection title="Single">
        <ToggleGroup type="single">
          <ToggleGroupItem value="left" aria-label="Align left">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="17" x2="7" y1="12" y2="12"/><line x1="19" x2="5" y1="18" y2="18"/></svg>
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>
          </ToggleGroupItem>
        </ToggleGroup>
      </DemoSection>

      <DemoSection title="Multiple">
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            B
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            I
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            U
          </ToggleGroupItem>
        </ToggleGroup>
      </DemoSection>
    </div>
  )
}

// Helper component for demo sections
function DemoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="rounded-lg border p-6 bg-card">
        {children}
      </div>
    </div>
  )
}
