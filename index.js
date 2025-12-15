/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// [study] AppRegistry.registerComponent 함수
// iOS의 AppDelegate와 Android의 MainActivity가 이 등록된 컴포넌트를 찾아 렌더링한다.
AppRegistry.registerComponent(appName, () => App);
