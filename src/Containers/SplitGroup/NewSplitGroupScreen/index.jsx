import React, { useCallback, useMemo, useRef, useState } from "react";
import { ScrollView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import moment from "moment/moment";


import { AccountAndCategoryIcons } from "../../../Assets/SVGIcons/AccountAndCategoryIcons/index";
import { getIconByName } from "../../../Util/Common";

import { AccountAndCategoryIconPicker, ColorPicker, CustomDatePicker, OutlinedRoundButton, RoundIconButton, ShortSubmitButton } from "../../../Components";
import CancelIcon from "../../../Assets/SVGIcons/CancelIcon";
import CalenderIcon from "../../../Assets/SVGIcons/CalenderIcon";
import PlusIcon from "../../../Assets/SVGIcons/PlusIcon";
import SaveIcon from "../../../Assets/SVGIcons/SaveIcon";

import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function NewSplitGroupScreen({ navigation, route }) {
  const {Colors, Layout } = useTheme();

  const scrollViewRef = useRef();
  const initialDate = useRef(moment(new Date()).format("X"));
  const iconPickerModalRef = useRef(null);

  const [iconPickerKey, setIconPickerKey] = React.useState(0);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [groupData, setGroupData] = useState({
    name:'',
    color:'#6E50FF',
    icon:'BuildingIcon',
    date: moment(new Date()).format("MMM DD HH:mm"),
    participants: []
  })
  const [participantText, setParticipantText] = useState('');

  const loadAccountAndCategoryIcons = useMemo(() => {
    return AccountAndCategoryIcons;
  }, []);

  const handleShowIconPicker = useCallback(() => {
    iconPickerModalRef?.current.present();
  }, []);

  const handleCloseIconPicker = useCallback(() => {
    iconPickerModalRef?.current.close();
    setIconPickerKey(Math.random());
  }, []);

  const handleSubmitIconPicker = useCallback((icon) => {
    setGroupData({ ...groupData, icon: icon });
    iconPickerModalRef?.current.close();
    setIconPickerKey(Math.random());
  }, [groupData.name, groupData.date, groupData.color, groupData.participants]);

  const handleAddParticipant = () =>{
    let temp = [...groupData.participants]

    if(participantText) {
      temp.push(participantText)
      setGroupData({...groupData, participants: temp});
    }
    setParticipantText('')
  }

  const handleClearParticipant = idx =>{
    let temp = [...groupData.participants]
    temp.splice(idx, 1);
    setGroupData({...groupData, participants: temp});
  }

  const handleSelectDate = calendarValue =>{
    setIsCalendarOpen(false);
    initialDate.current = moment(calendarValue).format("X");
    setGroupData({...groupData, date: moment(calendarValue).format("MMM DD HH:mm")});
  }

  const ParticipantNameCard = ({item, idx}) =>{
    return(
      <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
        <Text style={styles.txtParticipantName}>{item}</Text>
        <TouchableOpacity style={{padding:2}} onPress={()=>handleClearParticipant(idx)}>
          <CancelIcon/>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll
        keyboardShouldPersistTaps="always"
        >
        <View style={[Layout.fill, styles.container]}>
          <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
            <OutlinedRoundButton
              icon={<CancelIcon />}
              onPress={() => {
                navigation.pop();
              }}
            />
             <ShortSubmitButton
                icon={<SaveIcon isWhite />}
                title={'   Save'}
                small
                disabled = {groupData.name === '' || groupData.participants.length === 0}
              />
          </View>
          <View style={[Layout.rowHCenter, styles.groupNameIconView]}>
              <RoundIconButton
                icon={getIconByName(groupData.icon, loadAccountAndCategoryIcons, groupData.color)}
                bgColor={groupData.color}
                isSmall={true}
                onPress={handleShowIconPicker}
              />
              <TextInput
                placeholder="Group name"
                placeholderTextColor={Colors.gray002}
                style={[styles.input, { marginLeft: 30 }]}
                value={groupData.name}
                onChangeText={text =>
                  setGroupData({ ...groupData, name: text })
                }
              />
            </View>
            <View style={styles.colorContainer}>
              <Text style={styles.txtColor}>Choose color</Text>
              <View style={styles.colorView}>
                <ColorPicker onPickColor = {item => setGroupData({...groupData, color: item})}/>
              </View>
            </View>
            <View style={styles.dateContainer}>
              <CalenderIcon />
              <Text style={styles.txtDesc}>Created Date</Text>
              <TouchableOpacity onPress={() => setIsCalendarOpen(true)}>
                <Text style={styles.txtDate}>{groupData.date}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addCardView}>  
              <Text style={styles.txtAddParticipant}>Add Participants({groupData.participants.length}/25)</Text>
            </View>
            <View style={styles.participantContainer}>
              <ScrollView ref={scrollViewRef}
              onContentSizeChange={() =>
                scrollViewRef.current.scrollToEnd({ animated: true })
              }
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps='handled'>
                {groupData.participants.map((item,idx)=>(
                  <View key={idx} style={{marginBottom:5}}>
                    <ParticipantNameCard item={item} idx={idx} />
                  </View>
                ))}
                <View style={[Layout.row,Layout.justifyContentBetween, {marginTop:20}]}>
                  <TextInput
                    placeholder="Other participant"
                    placeholderTextColor={Colors.blue}
                    style={[styles.participantInput]}
                    value={participantText}
                    onChangeText={text=> setParticipantText(text)}
                  />
                  <ShortSubmitButton
                    icon={<PlusIcon/>}
                    title={'  Add'}
                    onPress={handleAddParticipant}
                    disabled = {groupData?.participants.length === 25}
                    small
                  />
                </View>
              </ScrollView>
            </View>
        </View>
      </KeyboardAwareScrollView>
      <CustomDatePicker
        handleClose={() => setIsCalendarOpen(false)}
        onSetSelectedDate={text => handleSelectDate(text)}
        open={isCalendarOpen}
        date={new Date()}
        mode="datetime"
      />
      <AccountAndCategoryIconPicker bottomSheetRef={iconPickerModalRef} key={iconPickerKey}
        closeBottomSheet={handleCloseIconPicker} colorCode={groupData.color}
        pickedIcon={groupData.icon} handleSubmit={handleSubmitIconPicker} 
      />
    </SafeAreaView>
  );
}

