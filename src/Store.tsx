/**
 * Vapor Sample 应用的全局状态管理
 *
 * 本文件使用组合模式将多个状态存储组合到一个统一的 Store 中，
 * 使用 React Context API 实现状态管理和依赖注入
 */

import { GuideToolbarStore } from './stores/guide-toolbar';
import { MainPanelStore } from './stores/main-panel';
import { QuickSwitchToolbarStore } from './stores/quick-switch-toolbar';
import { SpaceDialogStore } from './stores/space-dialog';
import { compose } from './utils/createStore';

/**
 * 组合多个独立的 Store 提供者为一个统一的全局状态提供者
 *
 * 使用 compose 函数组合以下状态存储：
 * - MainPanelStore: 主面板状态管理
 * - QuickSwitchToolbarStore: 快速切换工具栏状态管理
 * - GuideToolbarStore: 路线引导工具栏状态管理
 * - SpaceDialogStore: 空间切换对话框状态管理
 */
const Store = compose(MainPanelStore, QuickSwitchToolbarStore, GuideToolbarStore, SpaceDialogStore);

export { Store };
