"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: []
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            })
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLEVBQWM7S0FDdkI7SUFDRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNWLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVztnQkFDcEQsT0FBTyxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDcEMsQ0FBQyxDQUFDO1NBQ0wsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vbG9ncy5qc1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cblBhZ2Uoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgbG9nczogW10gYXMgc3RyaW5nW11cbiAgICB9LFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBsb2dzOiAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKChsb2c6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXRUaW1lKG5ldyBEYXRlKGxvZykpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG59KVxuIl19