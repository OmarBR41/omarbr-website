import { ErrorLayout } from '@/modules/layout';

const ServerError = () => (
  <ErrorLayout text="An error ocurred on the server. Please try again later." title="500 - Server-side error" />
);

export default ServerError;
