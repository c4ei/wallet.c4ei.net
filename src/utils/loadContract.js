import { ethers } from "ethers";
import { stakingICOAddress, stakingICOAbi } from "./constants";
import { toast } from "react-toastify";

async function loadContract(signer, chainId, setContract, address) {
  if (chainId !== 1) {
    toast.error(
      "Please Change your network to ETH Network for Buying Tokens"
    );
    return;
  }
  const _ec4eiICOContract = new ethers.Contract(
    stakingICOAddress,
    stakingICOAbi,
    signer
  );

  setContract({
    ec4eiICO: _ec4eiICOContract,
  });

  //Read From Contract

  const tokensAvailable = ethers.utils.formatEther(
    await _ec4eiICOContract.getICOTokenBalance()
  );

  const investorBalance = ethers.utils.formatEther(
    await _ec4eiICOContract.investorBalanceOf(address)
  );

  return {
    tokensAvailable,
    investorBalance,
  };
}

export default loadContract;
