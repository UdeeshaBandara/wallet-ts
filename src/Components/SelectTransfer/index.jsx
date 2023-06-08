import React, { useEffect, useMemo, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated';

import Account from "../../Database/Model/Account";

import { getTextColor, getIconByName, handleScrollValues } from "../../Util/Common";
import { navigate } from "../../Navigators/Root";

import { AccountAndCategoryIcons } from "../../Assets/SVGIcons/AccountAndCategoryIcons";
import { IconChip } from "../Chips";
import MaximizeIcon from "../../Assets/SVGIcons/MaximizeIcon";
import MinimizeIcon from "../../Assets/SVGIcons/MinimizeIcon";
import PlusBlackIcon from "../../Assets/SVGIcons/PlusBlackIcon";
import PlusIcon from "../../Assets/SVGIcons/PlusIcon";
import { SaveCloseController } from "../SaveCloseController";
import SaveIcon from "../../Assets/SVGIcons/SaveIcon";

import styles from "./styles";
import { Colors } from "../../Theme/Variables";

export const SelectTransfer = ({
                                 minimizeTransferMoneyModal,
                                 onTransferMoneyAdd,
                                 showCalculatorModal,
                                 amount,
                                 isMinimize,
                                 isEditMode,
                                 selectedFromAccount,
                                 setSelectedFromAccount,
                                 selectedToAccount,
                                 setSelectedToAccount,
                                 isNewAccountAdded,
                                 isNewFromAccountAdded,
                                 selectedToAccountId,
                               }) => {

  const loadAccountAndCategoryIcons = useMemo(()=>{
    return AccountAndCategoryIcons;
  },[]);

  const [accountList, setAccountList] = useState([]);
  const [verticalScrollFromValue, setVerticalScrollFromValue] = useState(0);
  const [verticalScrollToValue, setVerticalScrollToValue] = useState(0);
  const [fullScrollWidth, setFullScrollWidth] = useState(0);

  useFocusEffect(
    React.useCallback( () => {
      getAccounts();
    }, []),
  );
  const getAccounts = async () => {
    let accounts = await Account.getAllAccounts();


    if (isEditMode) {
      setSelectedFromAccount({
        ...selectedFromAccount,
        name: selectedFromAccount.name,
        accountId: selectedFromAccount.accountId,
        currency: selectedFromAccount.currency,
        color: selectedFromAccount.color,
        icon: selectedFromAccount.icon,
      });
      setSelectedToAccount({
        ...selectedToAccount,
        name: selectedToAccount.name,
        accountId: selectedToAccount.accountId,
        currency: selectedToAccount.currency,
        color: selectedToAccount.color,
        icon: selectedToAccount.icon,
      });
    } else if (accounts.length > 0) {
      if (selectedToAccountId.current === '0')
        selectedToAccountId.current = accounts[0].id;
      setSelectedFromAccount({
        ...selectedFromAccount,
        name: accounts[0].name,
        accountId: accounts[0].id,
        currency: accounts[0].currency,
        color: accounts[0].color,
        icon: accounts[0].icon,
      });
      setSelectedToAccount({
        ...selectedToAccount,
        name: accounts[0].name,
        accountId: accounts[0].id,
        currency: accounts[0].currency,
        color: accounts[0].color,
        icon: accounts[0].icon,
      });
    }


    if (isNewAccountAdded.current) {
      isNewAccountAdded.current = false;
      setSelectedToAccount({
        ...selectedToAccount,
        name: accounts[accounts.length - 1].name,
        accountId: accounts[accounts.length - 1].id,
        currency: accounts[accounts.length - 1].currency,
        color: accounts[accounts.length - 1].color,
        icon: accounts[accounts.length - 1].icon,
      });
      let fromAccount = accounts.find(x => x.id === selectedToAccountId.current);
      setSelectedFromAccount({
        ...selectedFromAccount,
        name: fromAccount.name,
        accountId: fromAccount.id,
        currency: fromAccount.currency,
        color: fromAccount.color,
        icon: fromAccount.icon,
      });
    }
    if (isNewFromAccountAdded.current) {
      isNewFromAccountAdded.current = false;
      setSelectedFromAccount({
        ...selectedFromAccount,
        name: accounts[accounts.length - 1].name,
        accountId: accounts[accounts.length - 1].id,
        currency: accounts[accounts.length - 1].currency,
        color: accounts[accounts.length - 1].color,
        icon: accounts[accounts.length - 1].icon,
      });

      let toAccount = accounts.find(x => x.id === selectedToAccountId.current);
      setSelectedToAccount({
        ...selectedToAccount,
        name: toAccount.name,
        accountId: toAccount.id,
        currency: toAccount.currency,
        color: toAccount.color,
        icon: toAccount.icon,
      });
    }
    accounts.push({ name: "Add account", accountId: -1, currency: "usd" });
    setAccountList(accounts);
  };

  //handle scroll position of of account list view
  useEffect(() => {
    handleScrollValues(
      accountList,
      selectedFromAccount.accountId,
      setVerticalScrollFromValue,
      fullScrollWidth
    );
    handleScrollValues(
      accountList,
      selectedToAccount.accountId,
      setVerticalScrollToValue,
      fullScrollWidth
    );
  }, [accountList, selectedFromAccount, selectedToAccount, fullScrollWidth]);

  return (
    <View style={styles.parentContainer}>
      <Animated.View style={styles.subContainer}>
        {isMinimize ? (
          <View>
            <View style={styles.selectedCashColumn}>
              <View style={styles.accountRow}>
                <IconChip
                  bgColor={
                    selectedFromAccount.color
                  }
                  icon={
                    getIconByName(selectedFromAccount.icon, loadAccountAndCategoryIcons,selectedFromAccount.color)
                  }
                  text={selectedFromAccount.name}
                  textColor={getTextColor(selectedFromAccount.color)}
                />
                <Text style={styles.txtCurrency}> {">"} </Text>
                <IconChip
                  bgColor={
                    selectedToAccount.color
                  }
                  icon={getIconByName(selectedToAccount.icon, loadAccountAndCategoryIcons,selectedToAccount.color) }
                  text={selectedToAccount.name}
                  textColor={getTextColor(selectedToAccount.color)}
                />
              </View>
              <TouchableOpacity
                style={styles.amountRow}
                onPress={showCalculatorModal}>
                <Text style={[styles.txtAmount, amount.split(".")[0].length > 7 && { fontSize: 24 }]}>
                  {parseFloat(amount.split(".")[0]).toLocaleString()}
                </Text>
                <Text style={[styles.txtCurrency, amount.split(".")[0].length > 7 && { fontSize: 24 }]}>
                  .{amount.split(".")[1] ? amount.split(".")[1] : "00"}
                </Text>
                <Text style={[styles.txtCurrency, amount.split(".")[0].length > 7 && { fontSize: 24 }]}>
                  {" "}
                  {selectedToAccount.currency}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <Text style={styles.accountText}>From</Text>
            <ScrollView
              onContentSizeChange={data => setFullScrollWidth(data)}
              horizontal={true}
              contentOffset={{ x: verticalScrollFromValue, y: 0 }}
            >
              <>
                {accountList?.map((item, idx) => (
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    key={idx}
                    onPress={() => {
                      if (item.accountId === -1) {
                        isNewFromAccountAdded.current = true;
                        selectedToAccountId.current = selectedToAccount.accountId;
                        navigate("NewAccountScreen", { screenName: "NewAccount", account: {}, isFromAddTransaction : true });
                      } else {
                        setSelectedFromAccount({
                          ...selectedFromAccount,
                          name: item.name,
                          accountId: item.id,
                          currency: item.currency,
                          color: item.color,
                          icon: item.icon,
                        });
                      }
                    }}>
                    <IconChip
                      bgColor={
                        selectedFromAccount.accountId === item.id
                          ? item.color
                          : "#F8F8F8"
                      }
                      icon={
                        item.accountId === -1 ? <PlusBlackIcon /> : getIconByName(item.icon, loadAccountAndCategoryIcons,(selectedFromAccount.accountId === item.id ? item.color: Colors.primaryYellow))
                      }
                      text={item.name}
                      textColor={
                        selectedFromAccount.accountId === item.id
                          ? getTextColor(item.color)
                          : "black"
                      }
                      fixedWidth={{ active: true, width: 160 }}
                    />
                  </TouchableOpacity>
                ))}
              </>
            </ScrollView>
            <Text style={[styles.accountText, { marginTop: 15 }]}>To</Text>
            <ScrollView
              onContentSizeChange={data => setFullScrollWidth(data)}
              horizontal={true}
              contentOffset={{ x: verticalScrollToValue, y: 0 }}
            >
              <>
                {accountList?.map((item, idx) => (
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    key={idx}
                    onPress={() => {
                      if (item.accountId === -1) {
                        selectedToAccountId.current = selectedFromAccount.accountId;
                        navigate("NewAccountScreen", { screenName: "NewAccount", account: {}, isFromAddTransaction : true });
                      } else {
                        setSelectedToAccount({
                          ...selectedToAccount,
                          name: item.name,
                          accountId: item.id,
                          currency: item.currency,
                          color: item.color,
                          icon: item.icon,
                        });
                      }
                    }}>
                    <IconChip
                      bgColor={
                        selectedToAccount.accountId === item.id
                          ? item.color
                          : "#F8F8F8"
                      }
                      icon={
                        item.accountId === -1 ? <PlusBlackIcon /> : getIconByName(item.icon, loadAccountAndCategoryIcons,(selectedToAccount.accountId === item.id ? item.color: Colors.primaryYellow))
                      }
                      text={item.name}
                      textColor={
                        selectedToAccount.accountId === item.id
                          ? getTextColor(item.color)
                          : "black"
                      }
                      fixedWidth={{ active: true, width: 160 }}
                    />
                  </TouchableOpacity>
                ))}
              </>
            </ScrollView>
            <TouchableOpacity
              style={styles.amountRow}
              onPress={showCalculatorModal}>
              <Text style={styles.txtAmount}>
                {parseFloat(amount.split(".")[0]).toLocaleString()}
              </Text>
              <Text style={styles.txtCurrency}>
                .{amount.split(".")[1] ? amount.split(".")[1] : "00"}
              </Text>
              <Text style={styles.txtCurrency}>
                {" "}
                {selectedToAccount.currency}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Animated.View>
      <SaveCloseController
        closeIcon={isMinimize ? <MaximizeIcon /> : <MinimizeIcon />}
        handleClose={minimizeTransferMoneyModal}
        handleSubmit={() =>
          onTransferMoneyAdd(
            selectedToAccount.accountId,
            selectedFromAccount.accountId,
            selectedToAccount.currency,
          )
        }
        submitButtonText={isEditMode ? "Save" : "Add"}
        submitButtonIcon={
          isEditMode ? <SaveIcon isWhite={true} /> : <PlusIcon />
        }
      />
    </View>
  );
};
