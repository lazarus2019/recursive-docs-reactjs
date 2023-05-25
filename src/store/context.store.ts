import { createContext } from 'react';

import { TNodeContext } from './type.store';

const NodeContext = createContext<TNodeContext | null>(null);

export default NodeContext;
