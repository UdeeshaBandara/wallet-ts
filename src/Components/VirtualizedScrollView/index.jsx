import React from 'react';
import { FlatList } from 'react-native';

export const VirtualizedScrollView = props => {
  return (
    <FlatList
      {...props}
      data={[]}
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => (
        <>{props.children}</>
      )}
    />
  );
};
