import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderWraper } from './loader.styled';

export function Loader() {
  return (
    <LoaderWraper>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </LoaderWraper>
  );
}
