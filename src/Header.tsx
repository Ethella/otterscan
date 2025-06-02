import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, lazy, memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import PriceBox from "./PriceBox";
import SourcifyMenu from "./SourcifyMenu";
import { useGenericSearch } from "./search/search";
import { RuntimeContext } from "./useRuntime";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import newtonLogosGold from "/public/logos/newton-logos-gold.svg";
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
            <div className="flex items-center space-x-2 font-title text-xl font-bold text-gray-900 dark:text-white">
              <img src={newtonLogosGold} alt="Newton" className="h-8 w-8" />
              <span>
                <span className="text-[#AF9870]"> 
                  {config?.branding?.siteName || "Newton"}
                </span>
                {config?.experimental && (
                  <span className="text-red-400">2</span>
                )}
                <span className="text text-gray-600"> | EXPLORER</span>
              </span>
            </div>
          </Link>
          <div className="inline sm:hidden">
            <SourcifyMenu />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
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
              className="w-full rounded-l border border-border bg-backgroundTertiary px-2 py-1 text-sm text-textSecondary placeholder:text-textSecondary placeholder:opacity-50 focus:outline-none focus:ring-2 focus:border-secondary"
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
              className="border border-border bg-backgroundTertiary px-2 py-1 text-sm text-textSecondary hover:bg-secondary focus:outline-none focus:ring-2 focus:border-secondary"
              type="button"
              onClick={() => setScanning(true)}
              title="Scan an ETH address using your camera"
            >
              <FontAwesomeIcon icon={faQrcode} />
            </button>
            <button
              className="rounded-r border border-border bg-backgroundTertiary text-textSecondary px-2 py-1 text-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:border-secondary"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
