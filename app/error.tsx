'use client';


interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-xl shadow-lg border border-red-100 p-8 text-center">
          {/* Header */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg 
                className="w-10 h-10 text-red-600" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600">
              An unexpected error was encountered while getting this page.
            </p>
          </div>

          {/* Error Details (Collapsible) */}
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Show error details
            </summary>
            <div className="mt-2 p-3 bg-gray-50 rounded-lg border">
              <code className="text-xs text-red-600 break-all">
                {error.message}
              </code>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          </details>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <button
              onClick={reset}
              className="flex-1 px-6 py-3 rounded-full border border-gray-500 text-gray-700 transition-colors font-small shadow-sm"
            >
              Try Again
            </button>
            
            <button
              onClick={handleReload}
              className="flex-1 px-6 py-3 rounded-full bg-violet text-white font-small shadow-sm"
            >
              Reload Page
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}