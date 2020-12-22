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
      <div>{arg.event.extendedProps.memo}</div>
      <div>{arg.event.extendedProps.unit}</div>
    </div>
  )
}

const StaffPage = () => (
  <Layout>
    <a href="https://fullcalendar.io/docs/vertical-resource-standard-demo" target="_blank">診察台ごとに列を分けるのであれば有料ブランにしなければこのようになるのではないか？</a>
    <a href="https://fullcalendar.io/docs/vertical-resource-standard-demo" target="_blank">週間に飛ぶと狭くて崩れる。工夫が必要？</a>
    <div className="unit-calendar"> {/* これで各ページのcssを調整 */}
      <FullCalendar
        locale={jaLocale} //日本語化 //カレンダーの月表示でText content did not match. Server: "2020 ├F3: M12┤" Client: "2020年12月"~~~~のようなエラーが出るが一旦無視。。
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} //日、月、アクションの機能を提供
        initialView={'timeGridDay'}//初期の表示の画面
        titleFormat={{
          year: "numeric",
          month: "numeric",
          day: "numeric"        
        }} 
        headerToolbar={{ //header-toolbar に表示させる　ものの一覧
          start: "timeGridWeek", //表示するボタン
          // start: "", 
          center: 'title',
          end: 'prev,today,next'
        }}
        buttonText={{
          prev:    '前日',
          today: "本日",
          next:    '翌日',
        }}
        slotMinTime={"09:00:00"}//時間軸の最低表示時間
        slotMaxTime={"14:30:00"}//時間軸の最高表示時間
        initialEvents={events}
        eventContent={(arg: EventContentArg) => EventComponent(arg)}
        dateClick={(arg) => {alert(`${arg.dateStr}をクリック！ここの画面で使う必要があるかは不明`)}}
      />
    </div>
  </Layout>
);

export default StaffPage;