import { ErrorLayout } from '@/modules/layout';

const NotFound = () => (
  <ErrorLayout text="The requested page doesn't exist or you don't have access to it." title="404 - Not Found" />
);

export default NotFound;
