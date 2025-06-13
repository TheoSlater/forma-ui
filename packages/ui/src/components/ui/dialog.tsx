import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "../../lib/utils";

const dialogVariants = {
  default: "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  center: "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  topRight: "top-4 right-4",
  bottomRight: "bottom-4 right-4",
  fullscreen: "inset-0 translate-x-0 translate-y-0",
};

const dialogSizes = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-lg",
  lg: "sm:max-w-xl",
  xl: "sm:max-w-2xl",
  full: "sm:max-w-full",
};

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  variant = "default",
  size = "md",
  initialFocus,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
  variant?: keyof typeof dialogVariants;
  size?: keyof typeof dialogSizes;
  initialFocus?: React.RefObject<HTMLElement>;
}) {
  React.useEffect(() => {
    const title = document.querySelector('[data-slot="dialog-title"]');
    if (!title) {
      console.warn(
        "DialogContent requires a DialogTitle component for accessibility"
      );
    }
  }, []);

  return (
    <DialogPrimitive.Content
      data-slot="dialog-content"
      className={cn(
        "fixed z-50 grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg p-6",
        "bg-card text-card-foreground shadow-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "duration-200",
        dialogVariants[variant],
        dialogSizes[size],
        variant === "fullscreen" && "max-w-full rounded-none border-0",
        className
      )}
      onOpenAutoFocus={(event) => {
        if (initialFocus?.current) {
          event.preventDefault();
          initialFocus.current.focus();
        }
      }}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          data-slot="dialog-close"
          className={cn(
            "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-card",
            "transition-opacity hover:opacity-100",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "disabled:pointer-events-none",
            "text-muted-foreground hover:text-foreground"
          )}
        >
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

const DialogRoot = Dialog;
const DialogRootTrigger = DialogTrigger;
const DialogRootContent = DialogContent;
const DialogRootClose = DialogClose;
const DialogRootOverlay = DialogOverlay;
const DialogRootHeader = DialogHeader;
const DialogRootFooter = DialogFooter;
const DialogRootTitle = DialogTitle;
const DialogRootDescription = DialogDescription;

Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Close = DialogClose;
Dialog.Overlay = DialogOverlay;
Dialog.Portal = DialogPrimitive.Portal;
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;

export {
  Dialog,
  DialogRoot,
  DialogRootTrigger,
  DialogRootContent,
  DialogRootClose,
  DialogRootOverlay,
  DialogRootHeader,
  DialogRootFooter,
  DialogRootTitle,
  DialogRootDescription,
};
