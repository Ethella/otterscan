import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, lazy, memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import PriceBox from "./PriceBox";
import SourcifyMenu from "./SourcifyMenu";
import { useGenericSearch } from "./search/search";
import { RuntimeContext } from "./useRuntime";
// @ts-expect-error
import Otter from "./otter.png?w=128&h=128&webp";

const CameraScanner = lazy(() => import("./search/CameraScanner"));

const Header: FC = () => {
  const { config, provider } = useContext(RuntimeContext);
  const [searchRef, handleChange, handleSubmit] = useGenericSearch();
  const [isScanning, setScanning] = useState<boolean>(false);

  return (
    <>
      {isScanning && <CameraScanner turnOffScan={() => setScanning(false)} />}
      <div className="flex flex-col sm:flex-row items-baseline space-y-1 sm:space-y-0 justify-between px-3 lg:px-9 py-2">
        <div className="flex flex-row justify-between sm:self-center items-center w-full sm:w-auto shrink-0 mr-2">
          <Link className="self-center" to="/">
            <div className="flex items-center space-x-2 font-title text-xl font-bold">
            <svg width={32} height={32} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.5611 0.663782C30.098 -0.221261 31.99 -0.221261 33.5269 0.663782L56.9355 14.1779C58.4724 15.063 59.421 16.7059 59.421 18.4812V45.5148C59.421 47.2902 58.4724 48.9278 56.9355 49.8181L33.5269 63.3322C31.99 64.2226 30.098 64.2226 28.5611 63.3322L5.15253 49.8181C3.61563 48.9331 2.66699 47.2902 2.66699 45.5148V18.4812C2.66699 16.7059 3.61563 15.0683 5.15253 14.1779L28.5611 0.663782ZM30.2941 4.19335C30.6651 3.5521 31.5872 3.5521 31.9582 4.19335L55.6848 45.2922C56.0558 45.9335 55.5947 46.7337 54.8527 46.7337H7.39431C6.65236 46.7337 6.19128 45.9335 6.56226 45.2922L30.2888 4.19335H30.2941ZM43.0769 32.308C43.0769 38.9856 37.6659 44.3966 30.9884 44.3966C24.3108 44.3966 18.8998 38.9856 18.8998 32.308C18.8998 25.6305 24.3108 20.2195 30.9884 20.2195C37.6659 20.2195 43.0769 25.6305 43.0769 32.308ZM26.012 28.1637C26.012 27.7026 26.383 27.3317 26.844 27.3317H35.1327C35.5938 27.3317 35.9648 27.7026 35.9648 28.1637V36.4524C35.9648 36.9134 35.5938 37.2844 35.1327 37.2844H26.844C26.383 37.2844 26.012 36.9134 26.012 36.4524V28.1637Z"
                fill={'white'}
              />
            </svg>
              <span>
                {config?.branding?.siteName || "Newton"}
                {config?.experimental && (
                  <span className="text-red-400">2</span>
                )}
                <span className="text text-secondary-dark"> | EXPLORER</span>
              </span>
            </div>
          </Link>
          <div className="inline sm:hidden">
            <SourcifyMenu />
          </div>
        </div>
        <div className="flex items-baseline gap-x-3">
          {(provider?._network.chainId === 1n ||
            config?.priceOracleInfo?.nativeTokenPrice?.ethUSDOracleAddress) && (
            <div className="hidden lg:inline">
              <PriceBox />
            </div>
          )}
          <form
            className="flex"
            onSubmit={handleSubmit}
            autoComplete="off"
            spellCheck={false}
          >
            <input
              className="w-full rounded-l border-b border-l border-t bg-slate-2 px-2 py-1 text-sm focus:outline-none"
              type="text"
              size={60}
              placeholder={`Type "/" to search by address / txn hash / block number${
                provider?._network.getPlugin(
                  "org.ethers.plugins.network.Ens",
                ) !== null
                  ? " / ENS name"
                  : ""
              }`}
              onChange={handleChange}
              ref={searchRef}
            />
            <button
              className="border bg-skin-button-fill px-2 py-1 text-sm text-skin-button hover:bg-skin-button-hover-fill focus:outline-none"
              type="button"
              onClick={() => setScanning(true)}
              title="Scan an ETH address using your camera"
            >
              <FontAwesomeIcon icon={faQrcode} />
            </button>
            <button
              className="rounded-r border-b border-r border-t bg-skin-button-fill px-2 py-1 text-sm text-skin-button hover:bg-skin-button-hover-fill focus:outline-none"
              type="submit"
            >
              Search
            </button>
          </form>
          {/* <div className="hidden sm:inline self-stretch">
            <SourcifyMenu />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default memo(Header);
