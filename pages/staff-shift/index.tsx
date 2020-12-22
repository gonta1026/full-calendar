import Layout from "../../components/Layout";
import FullCalendar, { EventContentArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import "@fullcalendar/timegrid/main.css";
import jaLocale from '@fullcalendar/core/locales/ja' // 日本語に対応させるために読み込む


const events = [{ title: "野原さんの診療", start: "2020-12-21T12:30:00", end: "2020-12-21T13:30:00"}] //設定できるのは指定されたオプションだけ

const EventComponent = () => {
  return (
    <div className="box">
      <div className="am">
        <div>10:00</div>
        <div>13:00</div>
      </div>
      <div className="pm">
        <div>14:00</div>
        <div>19:00</div>
      </div>
      <div className="pm">
        <div>14:00</div>
        <div>19:00</div>
      </div>
      <div className="pm">
        <div>14:00</div>
        <div>19:00</div>
      </div>
    </div>
  )
}

const StaffPage = () => (
  <Layout>
    <div className="staff-shift"> {/* これで各ページのcssを調整 */}
      <FullCalendar
        locale={jaLocale} //日本語化 //カレンダーの月表示でText content did not match. Server: "2020 ├F3: M12┤" Client: "2020年12月"~~~~のようなエラーが出るが一旦無視。。
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} //日、月、アクションの機能を提供
        initialView={'dayGridMonth'}//初期の表示の画面
        // titleFormat={{
        //   year: "numeric",
        //   month: "short",
        // }} 
        headerToolbar={{ //header-toolbar に表示させる　ものの一覧
          // start: "dayGridMonth,timeGridWeek,timeGridDay", //表示するボタン
          start: "", 
          center: 'title',
          end: 'prev,today,next'
        }}
        buttonText={{
          prev:    '前',
          today: "当月",
          next:    '後',
        }}
        initialEvents={events}
        eventContent={() => EventComponent()}
        dateClick={(arg) => {alert(`${arg.dateStr}をクリック！ここの画面で使う必要があるかは不明`)}}
      />
    </div>
  </Layout>
);

export default StaffPage;