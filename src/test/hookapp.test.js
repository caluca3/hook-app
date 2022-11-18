import { renderHook} from '@testing-library/react-hooks';
import HookApp from '../HookApp';
test('should increment counter', () => {
  const { result } = renderHook(() => HookApp())

  expect(result).toMatchSnapshot();
});
