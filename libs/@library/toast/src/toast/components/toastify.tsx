import { Toaster, useSonner, toast } from "sonner";
import type { FC } from 'react';
import React from 'react';
import type { ToastifyProps } from "../../types";

const Toastify: FC<ToastifyProps> = ({ props }) => {
    return (
        <Toaster {...props} />
    );
};

Toastify.displayName = "Toastify";

export { Toastify, useSonner, toast, type ToastifyProps }