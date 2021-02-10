import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Radio from './Radio';
import History from './SongHistory';

const RadioTab=()=>{
    return(
      <ScrollableTabView>
          <Radio tabLabel="Now Playing"/>
          <History tabLabel="Song history"/>
      </ScrollableTabView>
    )
}


export default RadioTab;