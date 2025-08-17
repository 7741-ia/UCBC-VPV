import { X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AlertBanner = ({ message, type = 'info', onClose }) => {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-500 text-yellow-50';
      case 'error':
        return 'bg-destructive text-destructive-foreground';
      case 'success':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <div className={`${getStyles()} py-2 px-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {type === 'warning' && <AlertTriangle className="h-4 w-4" />}
          <span className="text-sm font-medium">{message}</span>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-current hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AlertBanner;

