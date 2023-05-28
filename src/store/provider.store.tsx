import { useMemo, useReducer } from 'react';

import NodeContext from './context.store';
import nodeReducer, { initialNodeState } from './reducer.store';
import { TNodeProviderProps } from './type.store';

function NodeProvider({ children }: TNodeProviderProps) {
  const [state, dispatch] = useReducer(nodeReducer, initialNodeState());

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return <NodeContext.Provider value={value}>{children}</NodeContext.Provider>;
}

export default NodeProvider;
