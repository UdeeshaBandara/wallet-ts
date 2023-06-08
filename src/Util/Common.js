import React from 'react';
import moment from 'moment';

import { crypto, currency, transferTypes, sortTypes } from './Constants';
import { database } from '../../index';

import AtoZIcon from '../Assets/SVGIcons/AtoZIcon';
import BalanceAmountIcon from '../Assets/SVGIcons/BalanceAmountIcon';
import CalenderIcon from '../Assets/SVGIcons/CalenderIcon';
import DefaultIcon from '../Assets/SVGIcons/DefaultIcon';
import ExpensesIcon from '../Assets/SVGIcons/ExpensesIcon';
import IncomeIcon from '../Assets/SVGIcons/IncomeIcon';
import InfoIcon from '../Assets/SVGIcons/InfoIcon';
import SelectedIcon from '../Assets/SVGIcons/SelectedIcon';
import TransferCellDeselected from '../Assets/SVGIcons/TransferCellDeselected';
import TransferCellSelected from '../Assets/SVGIcons/TransferCellSelected';
import TransferExpenseDeselected from '../Assets/SVGIcons/TransferExpenseDeselected';
import TransferExpenseSelected from '../Assets/SVGIcons/TransferExpenseSelected';
import TransferIncomeDeselected from '../Assets/SVGIcons/TransferIncomeDeselected';
import TransferIncomeSelected from '../Assets/SVGIcons/TransferIncomeSelected';
import { TransactionCard, TransactionHeaderCard } from '../Components';

import { Colors } from '../Theme/Variables';
import { View } from 'react-native';

const getTransactionIcon = transactionType => {
  if (transactionType === 'Expenses') {
    return <ExpensesIcon />;
  } else if (transactionType === 'Income') {
    return <IncomeIcon />;
  } else {
    return <TransferCellSelected />;
  }
};

const getCurrencies = async () => {
  const allCurrencies = currency.map(currency => ({
    ...currency,
    isCrypto: false,
  }));
  return [...allCurrencies, ...crypto];
};

const getMonthAndYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const previousYear = currentYear - 1;
  const nextYear = currentYear + 1;

  const currentYearDates = Array.from(
    { length: 12 },
    (_, i) => new Date(currentYear, i, 1),
  );
  const previousYearDates = Array.from(
    { length: 12 },
    (_, i) => new Date(previousYear, i, 1),
  );
  const nextYearDates = Array.from(
    { length: 12 },
    (_, i) => new Date(nextYear, i, 1),
  );

  const allDates = [
    ...previousYearDates,
    ...currentYearDates,
    ...nextYearDates,
  ];

  return allDates;
};

const getPreviousMonthEndToCurrentMonthEnd = () => {
  const currentDate = moment();
  const previousMonthEndDate = moment(currentDate)
    .subtract(1, 'months')
    .endOf('month');
  const currentMonthEndDate = moment(currentDate).endOf('month');

  return `${moment(previousMonthEndDate).format('MMM.D')} - ${moment(
    currentMonthEndDate,
  ).format('MMM.D')}`;
};

const getIconForTransfer = (transferType, index) => {
  switch (transferType) {
    case transferTypes[0]:
      return index === 0 ? (
        <TransferIncomeSelected />
      ) : (
        <TransferIncomeDeselected />
      );
    case transferTypes[1]:
      return index === 1 ? (
        <TransferExpenseSelected />
      ) : (
        <TransferExpenseDeselected />
      );
    case transferTypes[2]:
      return index === 2 ? (
        <TransferCellSelected />
      ) : (
        <TransferCellDeselected />
      );
  }
};

const getIconForSort = (sortType, index) => {
  switch (sortType) {
    case sortTypes[0]:
      return <DefaultIcon isSelected={index === 0 ? true : false} />;
    case sortTypes[1]:
      return <BalanceAmountIcon isSelected={index === 1 ? true : false} />;
    case sortTypes[2]:
      return index === 2 ? (
        <TransferExpenseSelected />
      ) : (
        <TransferExpenseDeselected />
      );
    case sortTypes[3]:
      return <AtoZIcon isSelected={index === 3 ? true : false} />;
    case sortTypes[4]:
      return <DefaultIcon isSelected={index === 4 ? true : false} />;
    case sortTypes[5]:
      return <CalenderIcon isSelected={index === 5 ? true : false} />;
  }
};

const getFormattedBalance = balance => {
  const formattedBalance = `${parseFloat(
    balance.toString().split('.')[0],
  ).toLocaleString()}.${
    balance.toString().split('.')[1] ? balance.toString().split('.')[1] : '00'
  }`;

  return formattedBalance;
};

const getFormattedBalanceWithCents = balance => {
  let obj;
  obj = {
    balanceWithThousandSeparator: parseFloat(balance)
      .toLocaleString()
      .split('.')[0],
    cents: balance.toString().split('.')[1]
      ? balance.toString().split('.')[1]
      : '00',
  };
  return obj;
};

//format balance into m in grand total and transaction main cards
const getFormatBalanceInMandK = balance => {
  const absBalance = Math.abs(balance);
  const roundedKBalance = Math.round(absBalance / 10) * 10;
  const roundedMBalance = Math.round(absBalance / 10000) * 10000;
  const balanceInK = parseInt(roundedKBalance) / 1000;
  const balanceInM = parseInt(roundedMBalance) / 1000000;

  const formattedBalance =
    absBalance >= 1000000
      ? `${Math.sign(balance) === -1 ? '-' : ''}${balanceInM.toFixed(
          Number.isInteger(balanceInM) ? 0 : 2,
        )}m`
      : absBalance >= 100000
      ? `${Math.sign(balance) === -1 ? '-' : ''}${balanceInK.toFixed(
          Number.isInteger(balanceInK) ? 0 : 2,
        )}k`
      : balance.toFixed(2);

  return formattedBalance;
};

const getBudgetPercentage = (budget, spendAmount) => {
  const percentage = ((budget - spendAmount) / budget) * 100;
  return percentage.toFixed(0);
};

const getBufferButtonTitle = bufferCardAmount => {
  return bufferCardAmount <= 0 ? 'Left to spend' : 'Buffer exceeded by';
};

const getBufferCardColor = (bufferAmount, bufferCardAmount) => {
  if (parseFloat(bufferAmount) < bufferCardAmount || bufferCardAmount < 0) {
    return '';
  } else {
    return Colors.primaryRed;
  }
};

const getBufferCardIcon = (bufferAmount, bufferCardAmount) => {
  if (parseFloat(bufferAmount) < bufferCardAmount && bufferCardAmount >= 0) {
    return <InfoIcon isWhite={false} />;
  } else if (
    parseFloat(bufferAmount) > bufferCardAmount &&
    bufferCardAmount <= 0
  ) {
    return (
      <SelectedIcon isSmall={false} isWhite={bufferCardAmount === 0 && true} />
    );
  } else {
    return <InfoIcon />;
  }
};

const getBufferCardAmount = (
  totalIncomeAmount,
  totalExpenseAmount,
  bufferAmount,
) => {
  const income = parseFloat(totalIncomeAmount);
  const expense = parseFloat(totalExpenseAmount);
  const buffer = parseFloat(bufferAmount);
  const bufferCardAmount = buffer + expense - income;

  return bufferCardAmount;
};

const getBufferPercentage = (totalIncomeAmount, bufferCardAmount) => {
  const income = parseFloat(totalIncomeAmount);
  const absBalance = Math.abs(bufferCardAmount);
  let percentage;

  if (bufferCardAmount < 0) {
    percentage = (absBalance / income) * 100;
    return percentage.toFixed(0);
  } else {
    return '';
  }
};

function getThousandFormatterForCalculator(input) {
  const formattedExpression = input.replace(/[0-9,.]+/g, match => {
    const decimalIndex = match.indexOf('.');
    if (decimalIndex === -1) {
      return Number(match).toLocaleString();
    } else {
      const integerPart = match.slice(0, decimalIndex);
      const fractionalPart = match.slice(decimalIndex);
      return `${Number(integerPart).toLocaleString()}${fractionalPart}`;
    }
  });
  return formattedExpression;
}

const getDayName = item => {
  let dateText = moment(item._raw.time * 1000).from(new Date());
  let startOfToday = moment().startOf('day');
  let startOfDate = moment(item._raw.time * 1000).startOf('day');
  let daysDiff = startOfDate.diff(startOfToday, 'days');
  let days = {
    0: 'Today',
    '-1': 'Yesterday',
    1: 'Tomorrow',
  };

  if (Math.abs(daysDiff) <= 1) {
    dateText = days[daysDiff];
    return dateText;
  } else {
    return moment(item._raw.time * 1000).format('dddd');
  }
};

const renderTransactions = (itemList, navigation) => {
  return (
    <View>
      {itemList.item.list.transactions.map((item, idx) => {
        return item._raw.purpose != null && item._raw.purpose !== '1' ? (
          <TransactionCard
            transactionTitle={item._raw.title}
            category={item._raw.category}
            account={
              item._raw.purpose != null && item._raw.purpose === '2'
                ? item._raw.toAccount.id === item._raw.account.id
                  ? 'null'
                  : item._raw.account.name
                : item._raw.account.name
            }
            currency={item._raw.account.currency}
            transactionType={
              item._raw.purpose != null && item._raw.purpose === '2'
                ? 'Transfer'
                : item._raw.type === '2'
                ? 'Expenses'
                : 'Income'
            }
            balance={`${Number(item._raw.amount).toFixed(2)} ${
              item._raw.account.currency
            }`}
            isTransfer={item._raw.purpose != null && item._raw.purpose === '2'}
            toAccount={
              item._raw.purpose != null && item._raw.purpose === '2'
                ? item._raw.toAccount.name
                : ''
            }
            icon={item._raw.account.icon}
            toIcon={
              item._raw.purpose != null && item._raw.purpose === '2'
                ? item._raw.toAccount.icon
                : ''
            }
            onPress={() =>
              navigation.navigate('AddTransactionScreenType', {
                type:
                  item._raw.purpose !== '0'
                    ? 'transfer'
                    : item._raw.type === '1'
                    ? 'income'
                    : 'expense',
                isEditMode: true,
                isFromAccount: false,
                existingDetails: {
                  transactions: item._raw,
                  accounts: item._raw.account,
                  categories:
                    item._raw.category != null ? item._raw.category : null,
                  ...{
                    accountsTo:
                      item._raw.toAccount != null ? item._raw.toAccount : null,
                  },
                  ...{
                    transactionsTo:
                      item._raw.toTransaction != null
                        ? item._raw.toTransaction
                        : null,
                  },
                },
                isFromCategory: false,
              })
            }
            key={idx}
          />
        ) : null;
      })}
    </View>
  );
};

const renderTransactionHeader = (header, currencySymbol) => {
  return (
    <TransactionHeaderCard
      month={header.title}
      day={header.dayName}
      positiveOrNegativeBalance={header.amount > 0 ? 'positive' : 'negative'}
      balance={`${header.amount.toFixed(2)} ${currencySymbol}`}
    />
  );
};
const deleteAllAccountsAndTransactions = async () => {
  await database.write(async async => {
    await database.get('transactions').query().destroyAllPermanently();
    return await database.get('accounts').query().destroyAllPermanently();
  });
};

const getCurrencyLongName = async symbol => {
  let currencies = await getCurrencies();
  let filteredCurrency = currencies.find(x => x.code === symbol);
  return filteredCurrency.name;
};
const getColors = [
  { name: Colors.lightGreen },
  { name: Colors.primaryRed },
  { name: Colors.primaryYellow },
  { name: Colors.primaryLightBlue },
  { name: Colors.primaryOrange },
  { name: Colors.primaryPurple },
  { name: Colors.lightPink },
  { name: Colors.lightPurple },
  { name: Colors.primaryDarkBlue },
  { name: Colors.green002 },
];

const handleScrollValues = (
  accountList,
  accountId,
  setScrollValue,
  fullScrollWidth = 0,
) => {
  const accountListWithPosition = accountList?.map((data, idx) => ({
    position: idx,
    accountId: data.id,
  }));
  const extractSelectedAccount = accountListWithPosition.filter(
    data => data.accountId === accountId,
  );
  const selectedAccountPosition = extractSelectedAccount[0]?.position;
  const singleScrollWidth = fullScrollWidth / accountList.length;

  if (extractSelectedAccount.length > 0) {
    setScrollValue((singleScrollWidth - 5) * selectedAccountPosition);
  }
};
const getIconByName = (iconName, loadAccountAndCategoryIcons, colorCode) => {
  let props = { isWhite: null };

  if (
    colorCode === Colors.primaryYellow ||
    colorCode === Colors.primaryLightBlue ||
    colorCode === Colors.lightPink ||
    colorCode === Colors.gray001
  ) {
    props.isWhite = null;
  } else {
    props.isWhite = true;
  }

  if (iconName) {
    for (const item of loadAccountAndCategoryIcons) {
      const iconTitle = Object.keys(item)[0];
      const iconList = item[iconTitle];
      const foundIcon = iconList.find(icon => icon.name === iconName);
      if (foundIcon) {
        return React.createElement(foundIcon.component, props);
      }
    }
    return null;
  }
};

const getTextColor = colorCode => {
  return colorCode === Colors.primaryYellow ||
    colorCode === Colors.primaryLightBlue ||
    colorCode === Colors.lightPink ||
    colorCode === Colors.gray001
    ? Colors.black
    : Colors.white;
};

const getBorderColor = colorCode => {
  if (
    colorCode === Colors.primaryYellow ||
    colorCode === Colors.primaryLightBlue ||
    colorCode === Colors.lightPink
  ) {
    return { color: Colors.primaryBlack, isWhite: false };
  } else {
    //below is added to make sure if we add primaryYellow/primaryLightBlue/lightPink as bgColor then the font is black always, else every other new category font should appear in white
    return { color: Colors.white, isWhite: true };
  }
};

export {
  getBudgetPercentage,
  getBufferButtonTitle,
  getBufferCardColor,
  getBufferCardIcon,
  getBufferCardAmount,
  getBufferPercentage,
  getFormattedBalanceWithCents,
  getThousandFormatterForCalculator,
  getCurrencies,
  getColors,
  getFormattedBalance,
  getFormatBalanceInMandK,
  getMonthAndYear,
  getPreviousMonthEndToCurrentMonthEnd,
  getTransactionIcon,
  getIconForTransfer,
  getIconForSort,
  getDayName,
  renderTransactions,
  renderTransactionHeader,
  deleteAllAccountsAndTransactions,
  getCurrencyLongName,
  handleScrollValues,
  getIconByName,
  getTextColor,
  getBorderColor
};
