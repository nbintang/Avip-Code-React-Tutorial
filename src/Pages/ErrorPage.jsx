import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error  = useRouteError();
  return <>
  <div className="flex justify-center items-center min-h-screen gap-y-5 bg-black text-slate-400 flex-col">
    <h1 className="text-5xl font-bold">404 ERROR</h1>
    <p className="text-3xl">Sorry Unexpexted Error {":("}</p>
    <p className="text-3xl">{error.statusText || error.message}</p>
  </div>
  </>; 
}
