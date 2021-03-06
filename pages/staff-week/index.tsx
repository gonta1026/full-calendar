import Layout from "../../components/Layout";
import FullCalendar, { EventContentArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import "@fullcalendar/timegrid/main.css";
import jaLocale from '@fullcalendar/core/locales/ja' // 日本語に対応させるために読み込む


const events = [
  {  title: "野原さんの診療", start: "2020-12-22T12:30:00", end: "2020-12-22T13:30:00", memo: "aaa", unit: "診察台1"},
  {  title: "山田さんの診療", start: "2020-12-22T12:30:00", end: "2020-12-22T13:30:00", memo: "aaa", unit: "診察台2"},
  {  title: "佐藤さんの診療", start: "2020-12-22T12:30:00", end: "2020-12-22T13:30:00", memo: "aaa", unit: "診察台3"},
  {  title: "田中さんの診療", start: "2020-12-22T12:30:00", end: "2020-12-22T13:30:00", memo: "aaa", unit: "診察台4"},
  {  title: "松本さんの診療", start: "2020-12-22T13:30:00", end: "2020-12-22T14:30:00", memo: "aaa", unit: "診察台3"},
  {  title: "浜田さんの診療", start: "2020-12-22T13:30:00", end: "2020-12-22T14:30:00", memo: "aaa", unit: "診察台4"},
] //設定できるのは指定されたオプションだけ

const EventComponent = (arg: any) => {
  return (
    <div>
      <div>{arg.event.title}</div>
      <span className="column-label">チェック</span>
      <span className="column-label">チェック</span>
    </div>
  )
}

const StaffWeekPage = () => (
  <Layout>
    <div className="staff-week-calendar"> {/* これで各ページのcssを調整 */}
      <FullCalendar
        locale={jaLocale} //日本語化 //カレンダーの月表示でText content did not match. Server: "2020 ├F3: M12┤" Client: "2020年12月"~~~~のようなエラーが出るが一旦無視。。
        businessHours={true}
        initialView={'timeGridWeek'}//初期の表示の画面
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} //日、月、アクションの機能を提供
        allDaySlot={false} // alldayの表示設定
        // businessHours={{
        //   daysOfWeek: [1, 2, 3, 4, 5],
        //   startTime: "0:00",
        //   endTime: "24:00",
        // }}
        slotDuration={'00:30:00'} //表示する時間軸の細かさ
        snapDuration={'01:00:00'} // 選択する時間間隔
        titleFormat={{
          year: "numeric",
          month: "short",
        }} 
        headerToolbar={{ //header-toolbar に表示させる　ものの一覧
          start: "", //表示するボタン
          // start: "dayGridMonth,timeGridWeek,timeGridDay", //表示するボタン
          center: 'title',
          end: 'prev,today,next'
        }}
        buttonText={{
          prev:    '先週',
          today: "今週",
          next:    '翌週',
        }}
        initialEvents={events}
        eventContent={(arg: EventContentArg) => EventComponent(arg)}
        dateClick={(arg) => {alert(`${arg.dateStr}をクリック！ここの画面で使う必要があるかは不明`)}}
      />
    </div>
  </Layout>
);

export default StaffWeekPage;