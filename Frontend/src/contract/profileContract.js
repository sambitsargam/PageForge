import { ethers } from "ethers";
import { USER_CONTRACT } from "../util/metadata";


export async function deployContract(signer, name, purpose, chainId, cid, offerPrice, offerDescription, consultFee, ens, email) {
    // Deploy contract with ethers
    const factory = new ethers.ContractFactory(
        USER_CONTRACT.abi,
        USER_CONTRACT.bytecode,
        signer
    );

    // Convert prices to wei
    offerPrice = ethers.utils.parseEther(offerPrice.toString());
    consultFee = ethers.utils.parseEther(consultFee.toString());
    const contract = await factory.deploy(name, purpose, chainId, cid, offerPrice, offerDescription, consultFee, ens, email);
    // log
    console.log("Deploying contract...", name, purpose, chainId, cid, offerPrice.toString(), offerDescription, consultFee.toString(), ens);
    await contract.deployed();
    console.log("deployed contract...", contract.address);
   
    return contract;
}

export async function purchaseConsult(signer, contractAddress, price) {
    // Deploy contract with ethers
    const contract = new ethers.Contract(
        contractAddress,
        USER_CONTRACT.abi,
        signer
    );
    // log
    const value = ethers.utils.parseEther(price.toString());
    const tx = await contract.purchaseConsult({ value });
    await tx.wait();
    console.log("Purchased consult...", tx);
    return tx;
}

export async function purchaseAccess(signer, contractAddress, price) {
    // Deploy contract with ethers
    const contract = new ethers.Contract(
        contractAddress,
        USER_CONTRACT.abi,
        signer
    );
    // log
    const value = ethers.utils.parseEther(price.toString());
    console.log('Purchase access', value.toString());
    const tx = await contract.purchaseAccess({ value });
    await tx.wait();
    console.log("Purchased contract...", tx);
    return tx;
}


// get Metadata
export async function getMetadata(signer, contractAddress) {
    // Deploy contract with ethers
    const contract = new ethers.Contract(
        contractAddress,
        USER_CONTRACT.abi,
        signer
    );
    // log
    const res = await contract.getMetadata();
    console.log("getMetadata...", res);
    return res;
}