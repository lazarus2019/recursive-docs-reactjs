import { Dispatch, ReactNode } from 'react';

import { TNodeItem } from '../types';

export type TNodeState = {
  node: TNodeItem;
  nodeList: TNodeItem[];
};

// Now so we don't have to write out each inidividual action into a Union
// we can use a map and convert that into a Union later. The keys in this
// represent the action types and the values represent the payloads.
export type TNodeActionsMap = {
  addNode: TNodeItem;
  removeNode: number;
};

// Here's where we form the Actions union from our map. The quick explanation is
// we form a new map with all the possible actions keyed by the action types and
// and then we say we want each of the values at those keys to be an option in
// our Union. So type Actions becomes -
// { type: 'setFoo', payload: Foo } | { type: 'setBar', payload: Bar } | ...
// Anything you add to the ActionsMap will  become an action option in the
// Actions Union
export type TNodeAction = {
  [Key in keyof TNodeActionsMap]: {
    type: Key;
    payload: TNodeActionsMap[Key];
  };
}[keyof TNodeActionsMap];

export type TNodeContext = {
  state: TNodeState;
  dispatch: Dispatch<TNodeAction>;
};

export type TNodeProviderProps = {
  children: ReactNode;
};
