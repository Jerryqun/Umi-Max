import React, { Suspense } from 'react';
import { useLocation } from 'umi';

const DeopCmd = React.lazy(() => import('deopCmd/deopCmdEntry'));

const SubModule = () => {
  const location = useLocation();
  const { pathname, search } = location;

  return (
    <Suspense>
      <DeopCmd key="deopCmd" pathname={pathname} search={search}></DeopCmd>
    </Suspense>
  );
};

export default SubModule;
