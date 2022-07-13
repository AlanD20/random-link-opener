import { useEffect } from 'react';
import { clearAlert } from '@/features/alertSlice';
import { useAppDispatch, useAppSelector } from '@/common/store';

const AlertStatus = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.alert.error);
  const success = useAppSelector((state) => state.alert.success);
  // const success = "error";

  useEffect(() => {
    const timer = setTimeout(() => void dispatch(clearAlert()), 700);
    return () => void clearTimeout(timer);
  }, [dispatch, error, success]);

  if (!error && !success) return <></>;

  return (
    <div className="w-[90%] fixed left-6 bottom-8 flex flex-col justify-center gap-4 font-semibold text-lg">
      {error && (
        <span className="alert alert-error text-white shadow-lg py-2 text-base">
          {!Array.isArray(error)
            ? error
            : error.map((err, i) => (
                <span className="block" key={i}>
                  {err}
                </span>
              ))}
        </span>
      )}
      {success && (
        <span className="alert alert-success text-white shadow-lg py-2 text-base">
          {success}
        </span>
      )}
    </div>
  );
};

export default AlertStatus;
