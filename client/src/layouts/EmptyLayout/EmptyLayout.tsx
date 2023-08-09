import { LayoutProps } from '@/models/common';

const EmptyLayout = ({ children }: LayoutProps): JSX.Element => {
  return <div className='mx-[10%]'>{children}</div>;
};

export default EmptyLayout;