import SyncLoader from "react-spinners/SyncLoader";

const SkeletonLoad = ({loading, size, color, margin}) => {
  return <>
  <div>
    <SyncLoader
    color={color}
    loading={loading}
    size={size}
    speedMultiplier={1}
    margin={margin}
    />
  </div>
  </>
}

export default SkeletonLoad;
