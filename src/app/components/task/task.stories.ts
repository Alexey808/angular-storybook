import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';
export default {
  title: 'Task',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'UNCHECKED',
  // updated_at: new Date(2019, 0, 1, 9, 0),
};
// export const Default = () => ({
//   component: TaskComponent,
//   props: {
//     task: taskData,
//     onPinTask: actionsData.onPinTask,
//     onArchiveTask: actionsData.onArchiveTask,
//   },
// });
// pinned task state
export const Unchecked = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      state: 'UNCHECKED',
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});
// archived task state
export const Checked = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      state: 'CHECKED',
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});
