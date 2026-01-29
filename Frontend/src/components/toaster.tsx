import { Toaster as HotToaster } from "react-hot-toast";

/**
 * Custom Toaster component with TruQual branding
 * Provides consistent toast notifications across the application
 */
export default function Toaster() {
    return (
        <HotToaster 
            position="top-right"
            toastOptions={{
                duration: 5000,
                style: {
                    background: '#fff',
                    color: '#0f172a',
                    border: '1px solid #14b8a6',
                },
                success: {
                    iconTheme: {
                        primary: '#14b8a6',
                        secondary: '#fff',
                    },
                },
                error: {
                    iconTheme: {
                        primary: '#ef4444',
                        secondary: '#fff',
                    },
                },
            }}
        />
    );
}
