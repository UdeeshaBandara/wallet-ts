import React,{ useCallback, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { AccountCategoryMainCard, RoundIconButton, SaveCloseController, SortBy } from '../../Components';
import MenuIcon from '../../Assets/SVGIcons/MenuIcon';
import PlusIcon from '../../Assets/SVGIcons/PlusIcon';

import { useTheme } from '../../Theme';
import styles from './styles';

export default function SplitGroupScreen({ navigation, route }) {
  const { Colors,Layout } = useTheme();

  const sortByModalRef = useRef(null);
  let sortOrderIndex = useRef(1);

  const [isSplitGroups] = useState(true)
  const [isOpenSortModal, setIsOpenSortModal] = useState(false);
  const [sortState, setOrderState] = useState(0);

  const handleShowSort = useCallback(() => {
    sortByModalRef.current?.present();
  }, []);

  const handleCloseSort = useCallback(() => {
    sortByModalRef.current?.dismiss();
  }, []);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={[Layout.fill]}>
      <View style={ styles.topView}>
        <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
        <Text style={styles.txtSplit}>Split Group</Text>
        <RoundIconButton
            bgColor={Colors.gray004}
            icon={<MenuIcon />}
            isSmall={true}
            onPress={handleShowSort}
          />
        </View>
        {isSplitGroups ?  <Text style={styles.txtTotal}>Total: LKR 0.00</Text> :  <Text style={styles.txtSettleUp}>You are all settled up!</Text>}
       </View>
       <View style={[Layout.fill, { marginTop:30 }]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1}}>
            {isSplitGroups ? 
              <View style={styles.cardContainer}>
                <AccountCategoryMainCard
                    title={'May Trip'}
                    accountBalance={'0.00'}
                    currency={'LKR'}
                    expenses={'0.00'}
                    income={'0.00'}
                    colorCode={'#02B287'}
                    icon={'BackpackIcon'}
                    date={'08 Mar 14:09'}
                    isSplit
                    onPress={()=> navigation.navigate('ShowSplitTransactionScreen')}
                  />
                  <AccountCategoryMainCard
                    title={'Buy Foods'}
                    accountBalance={'0.00'}
                    currency={'LKR'}
                    expenses={'0.00'}
                    income={'0.00'}
                    colorCode={'#35277F'}
                    icon={'BankIcon'}
                    date={'08 Mar 14:09'}
                    isSplit
                    onPress={()=> navigation.navigate('ShowSplitTransactionScreen')}
                  />
                   <AccountCategoryMainCard
                    title={'Buy Foods'}
                    accountBalance={'0.00'}
                    currency={'LKR'}
                    expenses={'0.00'}
                    income={'0.00'}
                    colorCode={'#35277F'}
                    icon={'BankIcon'}
                    date={'08 Mar 14:09'}
                    isSplit
                    onPress={()=> navigation.navigate('ShowSplitTransactionScreen')}
                  />
              </View> 
            :
              <View style={[Layout.fill,Layout.center]}>
                <Text style={styles.txtYourOnly}>You’re the only one here!</Text>
              </View>
             }
          </ScrollView>
       </View>
          <SaveCloseController
            handleClose={() => navigation.goBack()}
            submitButtonText="Create Group"
            submitButtonIcon={<PlusIcon isWhite={true} />}
            handleSubmit={()=>navigation.navigate('NewSplitGroupScreen')}
          />
      </View>
      <SortBy
        sortByModalRef={sortByModalRef}
        key={sortState}
        index={sortOrderIndex.current}
        onChange={idx => setIsOpenSortModal(idx >= 1)}
        handleClose={handleCloseSort}
        isSplit
      />
    </SafeAreaView>
  );
}
