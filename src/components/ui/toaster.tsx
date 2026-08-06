'use client';

import { useToast } from '@/hooks/useToast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

interface ToasterProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onPause'> {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}
export function Toaster () {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      { toasts.map((toast) => {
        const { id, title, description, action, ...props } = toast as ToasterProps;
        return (
          <Toast key={ id } { ...props }>
            <div className="grid gap-1">
              { title && <ToastTitle>{ title }</ToastTitle> }
              { description && (
                <ToastDescription>{ description }</ToastDescription>
              ) }
            </div>
            { action }
            <ToastClose />
          </Toast>
        );
      }) }
      <ToastViewport />
    </ToastProvider>
  );
}
